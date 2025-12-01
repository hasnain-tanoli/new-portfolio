// GitHub API service
const GITHUB_USERNAME = "Hasnain-Tanoli"; // Replace with your GitHub username
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// For authenticated requests (if you have a token)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

// Debug logging
if (process.env.NODE_ENV === 'development') {
  console.log('GitHub Token Present:', !!GITHUB_TOKEN);
  if (GITHUB_TOKEN) {
    console.log('GitHub Token Length:', GITHUB_TOKEN.length);
  }
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  private: boolean;
}

export interface GitHubContributionDay {
  contributionCount: number;
  date: string;
}

export interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

export interface GitHubContributionData {
  weeks: GitHubContributionWeek[];
  totalContributions: number;
}

export interface GitHubStats {
  followers: number;
  public_repos: number;
  total_stars: number;
}

// Create headers for GitHub API requests
const getHeaders = () => {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  
  // Add authentication if token is available
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  
  return headers;
};

// Create headers for GitHub GraphQL API requests
const getGraphQLHeaders = () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  
  // Add authentication if token is available
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  
  return headers;
};

// Fetch user's public repositories
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      {
        headers: getHeaders(),
      }
    );
    
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} - ${response.statusText}`);
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Filter out private repos and sort by stars
    return repos
      .filter(repo => !repo.private)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

// Fetch user stats
export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
      {
        headers: getHeaders(),
      }
    );
    
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} - ${response.statusText}`);
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const userData = await response.json();
    
    // Fetch repos to calculate total stars
    const repos = await fetchGitHubRepos();
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    
    return {
      followers: userData.followers,
      public_repos: userData.public_repos,
      total_stars: totalStars,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return {
      followers: 0,
      public_repos: 0,
      total_stars: 0,
    };
  }
}

// Fetch GitHub contribution data using GraphQL API
export async function fetchGitHubContributions(): Promise<GitHubContributionData> {
  // If no token is provided, return mock data immediately
  if (!GITHUB_TOKEN) {
    console.warn("No GitHub token provided, using mock contribution data");
    return getMockContributions();
  }
  
  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;
    
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: getGraphQLHeaders(),
      body: JSON.stringify({
        query,
        variables: {
          username: GITHUB_USERNAME,
        },
      }),
    });
    
    if (!response.ok) {
      console.error(`GitHub GraphQL API error: ${response.status} - ${response.statusText}`);
      console.error("Response body:", await response.text());
      throw new Error(`GitHub GraphQL API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.errors) {
      console.error("GitHub GraphQL API errors:", data.errors);
      throw new Error(`GitHub GraphQL API error: ${JSON.stringify(data.errors)}`);
    }
    
    const contributionCalendar = data.data.user.contributionsCollection.contributionCalendar;
    
    return {
      weeks: contributionCalendar.weeks,
      totalContributions: contributionCalendar.totalContributions,
    };
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    // Fallback to mock data if GraphQL API fails
    return getMockContributions();
  }
}

// Fallback mock data function
function getMockContributions(): GitHubContributionData {
  const weeks = 52;
  const days = 7;
  const data: GitHubContributionWeek[] = [];
  
  for (let i = 0; i < weeks; i++) {
    const contributionDays: GitHubContributionDay[] = [];
    for (let j = 0; j < days; j++) {
      // Random contribution count (0-20)
      contributionDays.push({
        contributionCount: Math.floor(Math.random() * 21),
        date: new Date(Date.now() - (weeks - i) * 7 * 24 * 60 * 60 * 1000 - (days - j) * 24 * 60 * 60 * 1000).toISOString(),
      });
    }
    data.push({ contributionDays });
  }
  
  // Calculate total contributions
  const totalContributions = data.reduce((total, week) => {
    return total + week.contributionDays.reduce((weekTotal, day) => {
      return weekTotal + day.contributionCount;
    }, 0);
  }, 0);
  
  return {
    weeks: data,
    totalContributions,
  };
}
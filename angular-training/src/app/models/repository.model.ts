export interface Repository {
  description: string;
  forks: number;
  name: string;
  open_issues: number;
  /**
   * This is the date of the latest pushed commit.
   */
  pushed_at: string;
  html_url: string;
  /**
   * This is the number of stars that the repository has.
   *
   * Usage:
   * ```javascript
   * const repository: Repository;
   * repository.stargazers_count;
   * ```
   */
  stargazers_count: number;
  watchers: number;
}

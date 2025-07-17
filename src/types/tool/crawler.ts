import { CrawlErrorResult, CrawlSuccessResult } from '@deepnova/web-crawler';

export interface CrawlSinglePageQuery {
  url: string;
}

export interface CrawlMultiPagesQuery {
  urls: string[];
}

export interface CrawlResult {
  crawler: string;
  data: CrawlSuccessResult | CrawlErrorResult;
  originalUrl: string;
}

export interface CrawlPluginState {
  results: CrawlResult[];
}

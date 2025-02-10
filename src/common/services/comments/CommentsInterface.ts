/**
 * The entire response object
 */
export interface ICommentsResponse {
    data: CommentData[];
    meta: {
      pagination: {
        start: number;
        limit: number;
        total: number;
      };
    };
  }
  
  /**
   * A single comment object in the data array
   */
  export interface CommentData {
    id: number;
    documentId: number;
    tittle: string; 
    description: string;
    feel: string;  
    createdAt: string;  
    updatedAt: string;  
    publishedAt: string; 
    userLogo?: UserLogo; 
  }
  
  /**
   * The userLogo object
   */
  export interface UserLogo {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: ImageFormat; 
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any | null;
    createdAt: string;  
    updatedAt: string;  
    publishedAt: string;
  }
  
  /**
   * Thumbnail or any other image format
   */
  export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes?: number;
    url: string;
  }
  
  /**
   * Thumbnail for creation
   */
  export interface ICommentCreation {
    id?: number;
    tittle: string;
    description: string;
    feel: string;
    userLogo: string;
  }
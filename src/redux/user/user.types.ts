export interface CurrentUser {
  displayName: string;
  email: string;
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

// export interface Action<P> {
//   readonly type: string;
//  readonly payload?: P;
// }

export interface Breadcrumb {
  title: string;
  url: string;
}

export interface HeaderAction {
  title: string;
  icon?: string;
  url?: string;
  permissions?: string[];
  onClick?(): any;
}

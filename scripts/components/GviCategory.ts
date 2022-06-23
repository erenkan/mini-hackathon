import GviCategoryDesign from 'generated/my-components/GviCategory';

export default class GviCategory extends GviCategoryDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}

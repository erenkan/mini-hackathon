import FlCategoryItemDesign from 'generated/my-components/FlCategoryItem';

export default class FlCategoryItem extends FlCategoryItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}

import FlHouseItemDesign from 'generated/my-components/FlHouseItem';

export default class FlHouseItem extends FlHouseItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}

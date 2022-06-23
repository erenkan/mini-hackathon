import GviHouseDesign from 'generated/my-components/GviHouse';

export default class GviHouse extends GviHouseDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}

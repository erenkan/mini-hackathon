import FlHomeSearchViewDesign from 'generated/my-components/FlHomeSearchView';

export default class FlHomeSearchView extends FlHomeSearchViewDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}

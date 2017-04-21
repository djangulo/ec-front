export class Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    works: any[];
    press_releases: any[];
    publications: any[];
    
    constructor(
        public state = 'inactive'
    ) { }

    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active' )
    }
}

(() => { 

    class Avenger {
        private name: string;
        public team: string;
        public realname?: string;
    
        constructor(name: string, team: string, realname: string) {
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
    }
    
    const antman: Avenger = new Avenger("Ant-Man", "Avengers", "Scott Lang");

})() 

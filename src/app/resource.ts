  export enum Names {Income, Investments, Outcome, Loans};
  export enum Types { income, investment, outcome, loan};

  export class Resource {
    names: string[] = ['Income', 'Investments', 'Outcome', 'Loans'];
    types: string[] = ['income', 'investment', 'outcome', 'loan'];

    constructor(){}

    getNames() {
      return this.names;
    }

    getTypes() {
      return this.types;
    }
  }

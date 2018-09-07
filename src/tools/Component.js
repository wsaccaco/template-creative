export default class Component{
  constructor(props) {
    this.adsWillMount();
    this.render();
    this.adsDidMount();
    return this.render();
  }

  parse(){
    let wrapper= document.createElement('div');
    wrapper.innerHTML= this.render();
    this.el = wrapper.firstChild;
    return this.el;
  }

  adsWillMount(){

  }

  adsDidMount(){

  }

  render(){
    return this.parse();
  }

}
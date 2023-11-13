/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ClassType {
  title: string
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<ClassType> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};
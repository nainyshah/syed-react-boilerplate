class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: props.options,
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (ex) {
      //do nothing
    }
  }
  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate');
    if (prevState.options.length != this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        }),
      };
    });
  }
  handleMakeDecision() {
    const rand = Math.random() * this.state.options.length;
    alert(this.state.options[parseInt(rand)]);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add Item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option already exist';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }

  render() {
    const title = 'Indecision Apps!!';
    const subTitle = 'Put your decisions in the hands of computer. ';
    // const options =
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          handleMakeDecision={this.handleMakeDecision}
          hasOptions={this.state.options.length < 1}
        />
        <Options
          hasOptions={this.state.options.length < 1}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// Stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: 'Syed Raza',
};

IndecisionApp.defaultProps = {
  options: [],
};
// react componet
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button disabled={props.hasOptions} onClick={props.handleMakeDecision}>
        What should I do?
      </button>
    </div>
  );
};
const Options = (props) => {
  return (
    <div>
      <button disabled={props.hasOptions} onClick={props.handleDeleteOptions}>
        Remove all
      </button>
      {props.options.length === 0 && <p>There is no option!</p>}
      {props.options.map((option) => (
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={option}
          optionText={option}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     // console.log(this.props.options);
//     return (
//       <div>
//         <button
//           disabled={this.props.hasOptions}
//           onClick={this.props.handleDeleteOptions}
//         >
//           Remove all
//         </button>
//         {this.props.options.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

// <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {}
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// <div>{props.options.length === 0 && <p>There is no option!</p>}</div>
// <ul className="list-group mb-2 text-">
//       {props.options.map((option) => (
//         <Option
//           handleDeleteOption={props.handleDeleteOption}
//           key={option}
//           optionText={option}
//         />
//       ))}
//     </ul>
// <Action
//           handleMakeDecision={this.handleMakeDecision}
//           hasOptions={this.state.options.length < 1}
//         />
// <Options
//   hasOptions={this.state.options.length < 1}
//   handleDeleteOptions={this.handleDeleteOptions}
//   handleDeleteOption={this.handleDeleteOption}
//   options={this.state.options}
// />
//         <AddOption handleAddOption={this.handleAddOption} />
//         <OptionModel
//           handleCloseModal={this.handleCloseModal}
//           selectedOption={this.state.selectedOption}
//         ></OptionModel>

// <div>
// <button disabled={props.hasOptions} onClick={props.handleDeleteOptions}>
//   Remove all
// </button>
// {props.options.length === 0 && <p>There is no option!</p>}
// {props.options.map((option) => (
//   <Option
//     handleDeleteOption={props.handleDeleteOption}
//     key={option}
//     optionText={option}
//   />
// ))}
// </div>

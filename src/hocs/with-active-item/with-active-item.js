import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {activeItem: null};
      this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onItemClick={this.handleItemClick}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;

import * as React from "react";

interface Props {
  didMount?: () => void;
  unmount?: () => void;
}

export class LifeCycle extends React.PureComponent<Props> {
  componentDidMount() {
    if (this.props.didMount) {
      this.props.didMount();
    }
  }

  async componentWillUnmount() {
    if (this.props.unmount) {
      await this.props.unmount();
    }
  }

  render() {
    return null;
  }
}

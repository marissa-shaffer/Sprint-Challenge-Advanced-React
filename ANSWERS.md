- [ ] Why would you use class component over function components (removing hooks from the question)?

If you plan on using lifecycle methods then you should use a class based component. Functional components are good to use when there is not any state to be manipulated by that component.

- [ ] Name three lifecycle methods and their purposes.

Mounting: when the component is being built out from the beginning. Render method is invoked and you call componentDidMount.

Updating: This is when the component data is being updated. setState can be used to change the component state's data and componentDidUpdate can be called.

Unmounting: the compenent is removed from the screen and componentWillUnmount is called for clean up that may need to be done.

- [ ] What is the purpose of a custom hook?

The purpose of a custom hook is to be able to reuse stateful logic.

- [ ] Why is it important to test our apps?

Testing apps is important for the software quality. It minimizes the risk of bugs in production code.
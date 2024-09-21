export const WrapComponent = (props) => {
  return (
    <div class="card">
      <div class="card-body">
        {props.children}
      </div>
    </div>
  );
};

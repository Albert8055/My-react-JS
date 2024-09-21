export function Productcard(props) {
  return (
    <div class="card">
      <img
        src="https://th.bing.com/th/id/OIP.HgPa0rOyQFm1dCuGRzjc0AHaFj?rs=1&pid=ImgDetMain"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.dis}</p>
        <a href="#" class="btn btn-primary">
          Go Cart
        </a>
      </div>
    </div>
  );
}

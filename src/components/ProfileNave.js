
export default function Index() {
    return(
<div className="jumbotron">
<button
            onClick={() => {
              localStorage.clear('token');
              window.location=('/');
            }}>
            Logout
          </button>
</div>

    )
}
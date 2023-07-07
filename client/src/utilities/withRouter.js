import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = function(Component) {
  function ComponentwithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} location={location} params={params} navigate={navigate}/>
    )
  }
  return ComponentwithRouterProp;
}
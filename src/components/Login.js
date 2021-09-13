import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from "react-router";

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Signin</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your Professional Community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;
    margin-left: 0;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  font-size: 16px;
  color: #0a66c2;
  box-shadow: inset 0 0 0 1px #0a66c2;
  transition-duration: 167ms;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  min-height: 700px;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  max-width: 1128px;
  width: 100%;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    font-size: 56px;
    width: 55%;

    color: #2977c9;
    padding-bottom: 0;
    font-weight: 100;
    line-height: 70px;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      font-size: 20px;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700;
    height: 670px;
    position: absolute;
    top: 25px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  background-color: #fff;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  vertical-align: middle;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  z-index: 0;
  transition-duration: 167ms;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

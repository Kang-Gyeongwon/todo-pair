import { Headline, headerBoxStyle } from "./styled";

const Header = () => {
  return (
    <div style={headerBoxStyle}>
      <Headline>
        <span>My Todo List</span>
      </Headline>
    </div>
  );
};

export default Header;

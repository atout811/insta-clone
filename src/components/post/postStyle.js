import styled from "styled-components";

export const url =
  "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png";

export const img =
  "https://www.samma3a.com/tech/ar/wp-content/uploads/sites/3/2019/07/Best-photo-editing-apps.jpg";

export const UserImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 35px;
  margin: 8px;
  border: solid 1px grey;
  display: inline;
`;

export const UserBlock = styled.div`
  display: flex;
  margin: 10px;
`;

export const UserName = styled.span`
  margin-top: 15px;
  margin-left: 15px;
  font-size: 1.6em;
  margin-bottom: 2px;
`;

export const ImageWrapper = styled.img`
  height: 500px;
  margin: auto;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    margin: auto;
    width: 450px;
  }
`;

export const Wrapper = styled.div`
  background-color: #f0f8ff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  margin: auto;
  width: 1000px;
  text-align: center;
  border-radius: 15px;

  @media only screen and (max-width: 768px) {
    width: 500px;
  }
`;

export const Interaction = styled.div`
  margin: auto;
`;

export const CommentWrapper = styled.div`
  margin: auto;
`;

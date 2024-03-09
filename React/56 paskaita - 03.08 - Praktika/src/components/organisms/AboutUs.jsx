import styled from "styled-components";

const StyledArticle = styled.article`
  padding: 10px;
  column-gap: 10px;
  background-color: white;
  text-align: center;
  > img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  > p {
    text-align: justify;
  }
`

const AboutUs = () => {
  return (
    <StyledArticle>
      <h2>Hi!</h2>
      <img 
        src="https://img.freepik.com/free-vector/flat-illustration-people-taking-care-plants_23-2148980463.jpg"
        alt="We Are Plant People!"
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto ratione dolor quisquam eius similique velit, quaerat fuga ex alias rerum labore distinctio quos neque et laboriosam, doloribus nostrum tempora.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo in nemo fuga dignissimos doloribus facilis deserunt illum aliquid odio sequi porro magni, esse, voluptatem animi placeat amet quam, ullam sit ad soluta libero nesciunt. Adipisci, voluptates eum, quasi reiciendis eius est esse quae dolores et, eveniet exercitationem accusantium consectetur facere illum minus. Nihil, fugiat reiciendis!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro numquam eos asperiores minima, nisi unde. Aperiam repudiandae nesciunt dicta voluptate delectus iusto alias, voluptas perspiciatis esse quasi dolore eaque animi. Minus animi quaerat dolores, explicabo illo reiciendis natus asperiores! Id, repellat, laborum maiores rerum eos odit quidem facere deserunt nihil explicabo quas quibusdam magni dignissimos quo necessitatibus! Cupiditate velit mollitia facere. Reprehenderit odit blanditiis deserunt autem nihil. Quia accusantium libero reiciendis dicta velit ratione quam, ipsum temporibus obcaecati enim adipisci magni ipsa illo ipsam explicabo excepturi voluptatem recusandae autem distinctio alias perferendis aliquid, inventore sunt? Ad minima quibusdam ratione eveniet?</p>
      <img 
        src="https://img.freepik.com/free-vector/illustration-people-taking-care-plants_52683-64954.jpg"
        alt="We Are Plant People!"
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore, vero, earum perferendis nostrum ex corrupti ut consectetur beatae natus porro perspiciatis voluptates, odit maxime accusantium excepturi saepe amet est modi totam? Alias, facere ipsa!</p>
    </StyledArticle>
  );
}
 
export default AboutUs;
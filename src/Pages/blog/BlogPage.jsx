import React from "react";

import "../../scss/blogPage.scss";
import { Images } from "../../Icons&Images";
import GetStarted from "../../components/GetStarted";

const BlogPage = () => {
  const news = [
    {
      img: Images.sanitizer,
      author: "Policy Vault Africa",
      title: "Policy Vault wins award of the year and bcvsz cxvhcg vusz cvshz",
      desc: "Request for unavailable documents across sectors and countries. Our team is committed to fast turn-around.Request for unavailable documents across sectors and countries.",
    },
    {
      img: Images.laboratory,
      author: "Policy Vault Africa",
      title: "Policy Vault wins award of the year and bcvsz cxvhcg vusz cvshz",
      desc: "Request for unavailable documents across sectors and countries. Our team is committed to fast turn-around.Request for unavailable documents across sectors and countries.",
    },
    {
      img: Images.farmer,
      author: "Policy Vault Africa",
      title: "Policy Vault wins award of the year and bcvsz cxvhcg vusz cvshz",
      desc: "Request for unavailable documents across sectors and countries. Our team is committed to fast turn-around.Request for unavailable documents across sectors and countries.",
    },
  ];

  return (
    <main className="blogPage">
      <section className="blogPage__section1">
        <h1>Techstudio Wins 2021 Africa Innovation Challenge</h1>
        <div>
          <p>BLOG</p>
          <p>3MIN READ</p>
        </div>
      </section>
      <section className="blogPage__section2">
        <div>
          <img src={Images.blogPage} alt="headphoto" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, modi
          rem fugiat neque id provident reprehenderit illo adipisci veniam omnis
          enim quis molestias quas suscipit ratione ducimus recusandae,
          voluptatem corporis sint esse possimus! Sed voluptate, iste minima cum
          perspiciatis iusto corporis praesentium. Provident alias animi vitae
          veniam illo vel iste voluptatem veritatis sint explicabo iure, cumque
          molestiae reprehenderit, ipsa maxime est aspernatur blanditiis
          suscipit laudantium. Adipisci rerum repellat libero ab consectetur!
          Soluta praesentium ab officiis cum? Consequatur dolores architecto
          veniam nulla voluptate reprehenderit voluptatum nobis, perferendis
          corporis tenetur ullam aliquam voluptas facere iure reiciendis
          possimus at ab! Aperiam dolorem voluptatum sint dolore vitae illum.
          Perferendis laudantium illum voluptas explicabo deserunt autem
          corporis perspiciatis quidem. Labore a dicta exercitationem similique?
          Pariatur, consequatur. Nesciunt unde inventore explicabo culpa eius,
          ad et nemo saepe maiores exercitationem, odit similique deleniti. A,
          voluptatum repudiandae ipsam repellendus officia repellat voluptates
          eligendi at recusandae accusamus ea inventore aliquam quod eveniet
          quaerat eius alias debitis incidunt dicta aliquid aspernatur nam atque
          libero! Impedit, ullam quisquam. Suscipit vel quisquam dolores, itaque
          eligendi corrupti! Ipsam placeat vitae, molestias corporis eaque
          doloremque minus, ut nemo rerum, tempora fuga nostrum dolor enim ad
          veniam eius excepturi saepe. Nulla quis tempora architecto sed
          necessitatibus praesentium laborum commodi quasi ex doloremque,
          doloribus similique dignissimos ipsum velit, fugit quo maiores error
          repellat aliquam veniam! Voluptates voluptatem consequuntur facilis
          qui ut optio corrupti magni ad esse. Cupiditate, doloribus asperiores
          officia accusantium accusamus, molestias in iure delectus veniam omnis
          eius! Quaerat accusantium explicabo aliquid rerum nihil harum, odit
          facere amet maiores blanditiis quasi est possimus voluptatum enim vel
          doloribus. Nesciunt voluptas doloremque, nostrum eius praesentium odit
          ullam ad? Minus atque nesciunt deserunt at eveniet? Tenetur odio optio
          asperiores sit facere? Porro quibusdam iure consequatur dolorem itaque
          fuga aut delectus nam animi numquam error cupiditate consectetur quod
          reprehenderit nesciunt et ducimus eligendi mollitia ipsum, veniam
          dignissimos. Eum magnam est repudiandae! Doloribus sequi ex ratione
          aliquid temporibus enim earum, quam ipsam debitis quibusdam suscipit
          harum officia labore ea quidem facilis laboriosam, repudiandae
          voluptates ad quas nostrum iste aperiam distinctio eaque. Amet
          sapiente repellendus aliquam molestias accusamus veritatis voluptatem
          vitae, quaerat nesciunt reprehenderit, quo dolorum perferendis
          excepturi asperiores voluptates ex fugiat magni ducimus recusandae vel
          temporibus tempora fuga! Totam, recusandae nostrum voluptates ut
          quaerat tenetur sint reiciendis possimus esse provident fugit facilis
          aperiam nulla, ab ex delectus id vero, deleniti iure. Veritatis
          aperiam ex dolores quod quasi, atque deleniti dolore
        </p>
        <article>
          <div>
            <img src={Images.blogPage} alt="photo1" />
          </div>
          <div>
            <img src={Images.newspaper} alt="photo2" />
          </div>
          <div>
            <img src={Images.laboratory} alt="photo3" />
          </div>
        </article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          architecto! Minima debitis ratione similique magnam porro fuga in
          doloribus quibusdam voluptates et consequatur ipsa, cum accusantium ex
          sit quasi omnis distinctio repudiandae sint eligendi labore enim sequi
          ut dolorum? Quidem ipsa velit exercitationem tenetur cupiditate quos
          obcaecati distinctio, dolorum error, fugit aperiam aspernatur
          blanditiis! Cupiditate asperiores facilis labore optio! Ducimus,
          inventore. Amet, velit reprehenderit sequi fugit aperiam distinctio
          quasi dicta nihil provident nemo ad eum obcaecati qui voluptates!
          Repellat at laboriosam, eveniet odit quia voluptates harum officiis in
          quis maxime quo odio distinctio! Sequi voluptatum voluptatem beatae
          totam ab corrupti.
        </p>
      </section>
      <section className="blogPage__section3">
        <h3>Read this next</h3>
        <article>
          {news.map((item) => (
            <div>
              <div>
                <img src={item.img} alt="sanitizer" />
              </div>
              <span>{item.author}</span>
              <h6>{item.title}</h6>
              <p>{item.desc}</p>
              <button>Read more</button>
            </div>
          ))}
        </article>
      </section>
      <section className="blogPage__section4">
        <GetStarted />
      </section>
    </main>
  );
};

export default BlogPage;

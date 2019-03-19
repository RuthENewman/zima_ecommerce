import React, {Component} from 'react';

class About extends Component {


  render() {
    return (
      <div className="main_content">
        <h1 className="category_eng" id="about_header">
          About ZIMA
        </h1>
        <div id="about_summary">
          <p className="category_eng">
          ZIMA ("Winter") is an e-commerce platform of gifts, souvenirs and other items designed and made in Russia, and that celebrate Russian cultural contributions and the beauty of the Russian landscape.
          </p>
          <br/>
          <p className="category_eng">
          The exclusive items for sale among Zima's online collection are all individually curated by an experienced Russian gallerist and curator.
          </p>
          <br />
          <p className="category_eng">
            Save time and discover the perfect gift, for yourself or someone else.
          </p>
          <br/>
          <p className="category_eng">
            Browse the full collection, or by theme.
          </p>
        </div>
    </div>)
  }


}

export default About;

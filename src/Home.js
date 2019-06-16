import React from 'react'
import { Breadcrumb} from 'antd'
import {Link} from 'react-router';

const Home = ({ routes, params, children, props }) => (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      {children}
      <Breadcrumb routes={routes} params={params} />
    </div>
  );

  export default Home;
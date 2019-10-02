import { useEffect, useState } from 'react';

function Page(props) {
  const { list } = props;
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <h2>users</h2>
      <ul>
        { (list || []).map(user => <li key={user}>{user}</li>) }
      </ul>
    </div>
  );
}

Page.getInitialProps = async () => {
  console.log('Users getInitialProps');
  return Promise.resolve({
    list: ['foo', 'bar'],
  });
};

export default Page;
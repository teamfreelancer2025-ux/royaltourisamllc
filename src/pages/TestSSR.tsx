const TestSSR = () => {
  const serverRenderedTime = new Date().toISOString();

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', color: 'white' }}>
      <h1>SSR Test Page</h1>
      <p>This page was rendered on the server at:</p>
      <p>{serverRenderedTime}</p>
      <p>If you refresh the page, this timestamp should update, confirming server-side rendering.</p>
    </div>
  );
};

export default TestSSR;

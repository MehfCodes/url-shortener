import { useRouter } from 'next/router';
function URL({ orginal }) {
  const route = useRouter();
  window.location.replace(route.query.url);
  return <div>{}</div>;
}

URL.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/api/${ctx.query.url}`, {
    headers: { 'Content-Type': 'Application/json' },
  });
  let data = await res.json();
  if (res.ok === true && res.status === 200) {
    if (typeof window === 'undefined' && ctx.res.writeHead) {
      ctx.res.writeHead(302, { Location: `https://${data.orginal}` });
      ctx.res.end();
    }
  } else {
  }
  return { orginal: data.orginal };
};
export default URL;

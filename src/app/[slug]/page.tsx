export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {decodeURIComponent(params.slug)}</div>;
}

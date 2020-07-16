const Index = () => {
  console.log('The value NEXT_PUBLIC_MAP_KEY');
  console.log(process.env.NEXT_PUBLIC_MAP_KEY)
    return (
        <>
          <h1>Testing Environment Variables in Next.js</h1>
          <p>Hi all</p>
        </>
    )
}

export default Index;

import Posts from "./components/Posts"
//after two refreshes after 10secs data changes will be shown
export const revalidate = 10

export default function Home() {
  return (
    <main className = 'px-6 mx-auto'>
      <p className = 'mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋&nbsp;
        <span className = 'whitespace-nowrap'>
          I&apos;m <span className = 'font-bold'>Tom</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}

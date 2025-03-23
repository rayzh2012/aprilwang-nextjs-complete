import Head from 'next/head'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const siteRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.onended = () => {
        video.style.opacity = 0
        setTimeout(() => {
          siteRef.current.style.opacity = 1
        }, 1000)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>April Wang Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={styles.video}
        >
          <source src="https://cdn.pixabay.com/video/2023/05/10/164671-825599119_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div ref={siteRef} className={styles.siteContent}>
        <header>
          <h1>April Wang</h1>
          <p>AI + Industrial Design</p>
        </header>

        <main>
          <h2>Featured Work</h2>
          <div className={styles.projectGrid}>
            <img src="/assets/img/work1.jpg" alt="Project 1" />
            <img src="/assets/img/work2.jpg" alt="Project 2" />
          </div>
        </main>

        <footer>&copy; 2024 April Wang</footer>
      </div>
    </>
  )
}
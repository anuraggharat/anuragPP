import axios from "axios"

export const getBlogs = async () => {
  try {
    const res = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anuraggharat"
    )
    console.log(res)
    return res.data
  } catch (error) {
    return {
      status: false,
      data: [],
    }
  }
}

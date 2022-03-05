const socialMediaName = {
  instagram: 'joas_vidal1',
  youtube: 'channel/UCKVA94AX86JGwRjRhslOwow',
  github: 'Joas-Vidal',
  email: 'mailto://joasx130@gmail.com'
}

const ids = ['instagram', 'youtube', 'github', 'email']

for (let i = 0; i < ids.length; i++) {
  const setA = document.getElementById(ids[i])
  setA.href = url(ids[i]) + socialMediaName[ids[i]]
}
function url(socialMedia) {
  var link = ''
  switch (socialMedia) {
    case 'instagram':
      link = 'https://instagram.com/'
      break
    case 'youtube':
      link = 'https://youtube.com/'
      break
    case 'github':
      link = 'https://github.com/'
      break
    case 'email':
      break
    default:
      break
  }
  return link
}

function githubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaName.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImg.src = data.avatar_url
    })
}
githubProfileInfos()

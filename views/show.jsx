const React = require('react')
const Default = require('./layouts/Default.jsx')

function Show ({bread, index}) {
  console.log(bread.name)
    return (
      <Default>
        <h3>{bread.name}</h3>
            <p>
                and it
                {
                  bread.hasGluten
                  ? <span> does </span>
                  : <span> does NOT </span>
                  }
                  have gluten.
            </p>
        <img src={bread.image} alt={bread.name} />
        
        <ul>
          <form action={`/breads/${index}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
          </form>
        </ul>

        <li><a href="/breads"> Go Home </a></li>
      </Default>
    )
}

module.exports = Show

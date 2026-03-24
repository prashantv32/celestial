function Footer(){
    const year = new Date().getFullYear();
    return <footer className="footer">
    <p>&copy; Prashant Verma {year}</p>
    </footer>

}

export default Footer
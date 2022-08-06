const ProfileDetails = () =>
    <form>
        <div className="row">
            <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control"/>
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="password" className="form-label">Hasło</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    autoComplete="new-password"
                />
            </div>
        </div>
        <div className="col-12">
            <button className="btn btn-primary w-100 mt-2">Zapisz</button>
        </div>
    </form>;

export default ProfileDetails;
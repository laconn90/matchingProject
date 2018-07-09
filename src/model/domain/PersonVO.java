package model.domain;

public class PersonVO {
	private String id;
	private String pw;
	private String name;
	private String gender;
	private String age;
	private String favorability;
	private String reliability;
	private String sport;
	private String game;
	private String culture;
	private String restraunt;
	private String travel;
	private String study;
	public PersonVO() {
		super();
	}
	
	
	public PersonVO(String id) {
		super();
		this.id = id;
	}


	public PersonVO(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}


	public PersonVO(String id, String pw, String name) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
	}

	public PersonVO(String id, String pw, String name, String gender, String age) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.gender = gender;
		this.age = age;
	}

	public PersonVO(String id, String sport, String game, String culture, String restraunt, String travel,
			String study) {
		super();
		this.id = id;
		this.sport = sport;
		this.game = game;
		this.culture = culture;
		this.restraunt = restraunt;
		this.travel = travel;
		this.study = study;
	}


	public PersonVO(String id, String pw, String name, String gender, String age, String favorability,
			String reliability, String sport, String game, String culture, String restraunt, String travel,
			String study) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.favorability = favorability;
		this.reliability = reliability;
		this.sport = sport;
		this.game = game;
		this.culture = culture;
		this.restraunt = restraunt;
		this.travel = travel;
		this.study = study;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getFavorability() {
		return favorability;
	}
	public void setFavorability(String favorability) {
		this.favorability = favorability;
	}
	public String getReliability() {
		return reliability;
	}
	public void setReliability(String reliability) {
		this.reliability = reliability;
	}
	public String getSport() {
		return sport;
	}
	public void setSport(String sport) {
		this.sport = sport;
	}
	public String getGame() {
		return game;
	}
	public void setGame(String game) {
		this.game = game;
	}
	public String getCulture() {
		return culture;
	}
	public void setCulture(String culture) {
		this.culture = culture;
	}
	public String getRestraunt() {
		return restraunt;
	}
	public void setRestraunt(String restraunt) {
		this.restraunt = restraunt;
	}
	public String getTravel() {
		return travel;
	}
	public void setTravel(String travel) {
		this.travel = travel;
	}
	public String getStudy() {
		return study;
	}
	public void setStudy(String study) {
		this.study = study;
	}
	@Override
	public String toString() {
		return "PersonVO [id=" + id + ", pw=" + pw + ", name=" + name + ", gender=" + gender + ", age=" + age
				+ ", favorability=" + favorability + ", reliability=" + reliability + ", sport=" + sport + ", game="
				+ game + ", culture=" + culture + ", restraunt=" + restraunt + ", travel=" + travel + ", study=" + study
				+ "]";
	}
	
}


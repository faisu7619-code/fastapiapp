from database import SessionLocal
from models.users import User
from utils.security import hash_password


def seed_admin():
    db = SessionLocal()
    try:
        admin_email = "admin@example.com"
        existing = db.query(User).filter(User.email == admin_email).first()
        if existing:
            print("Admin user already exists:", admin_email)
            return
        admin = User(
            name="Admin",
            email=admin_email,
            hashed_password=hash_password("adminpass"),
            role="Admin",
        )
        db.add(admin)
        db.commit()
        print("Created admin user:", admin_email)
    finally:
        db.close()


if __name__ == "__main__":
    seed_admin()

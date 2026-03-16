from models import Animal, Dog, Cat


def main():
    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Whiskers", 2, "white", True)
    animal = Animal("Generic", 5, "gray")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)
        print(a.info())
        print(a.speak())
        print("-----------------")


if __name__ == "__main__":
    main()
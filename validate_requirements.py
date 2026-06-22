import re

REQUIREMENT_PATTERN = re.compile(r"^[a-zA-Z0-9_.+-]+(?:\[.*\])?==[0-9]+(?:\.[0-9]+)*$")


def validate_requirements(path: str) -> None:
    with open(path, "r", encoding="utf-8") as file:
        lines = [line.strip() for line in file if line.strip() and not line.startswith("#")]

    invalid_lines = [line for line in lines if not REQUIREMENT_PATTERN.match(line)]

    if invalid_lines:
        raise SystemExit(f"Invalid requirement format:\n" + "\n".join(invalid_lines))

    print(f"Validated {len(lines)} requirement entries successfully.")


if __name__ == "__main__":
    validate_requirements("requirements.txt")

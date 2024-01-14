import re

for num in range(1, 13):
    # Read the file
    with open(f'book{num}.txt', 'r') as f:
        lines = f.readlines()

    cleaned_lines = []
    skip = False
    for line in lines:
        line = line.strip()
        if re.match(r'^\d+–', line.lstrip()):
            # print('start skip', line)
            skip = True
        elif 'BOOK' in line or "B O O K" in line:
            # print('end skip', line)
            skip = False
        if not skip and line and not "BOOK" in line and not "B O O K" in line and not re.search(r'\.\s*\d+\s*\.', line) and not line.isdigit():
            cleaned_lines.append(line + '\n')  # Add the cleaned line back to the list

    # Write the cleaned text to a new file
    with open(f'Aeneid_English_{num}.txt', 'w') as f:
        f.writelines(cleaned_lines)
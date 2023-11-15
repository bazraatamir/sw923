# Өгөгдөл оруулах: Толь бичгийн жагсаалт
employee_list = [
   {"id": 12345, "name": "John", "department": "Kitchen"},
   {"id": 12456, "name": "Paul", "department": "House Floor"},
   {"id": 12478, "name": "Sarah", "department": "Management"},
   {"id": 12434, "name": "Lisa", "department": "Cold Storage"},
   {"id": 12483, "name": "Ryan", "department": "Inventory Mgmt"},
   {"id": 12419, "name": "Gill", "department": "Cashier"}
]
"Paul_House Floor"
# {j:12345}
# Map() функцэд шилжүүлэх функц.
def mod(employee_list):
   temp = employee_list['name'] + "_" + employee_list["department"]
   return temp

def to_mod_list(employee_list):
   """ ажилчид dict ийн хэлтэс хэсгийг жагсаалт болгон өөрчил

   [IMPLEMENT ME] 
      1.    ажилтануудын жагсаалтын бүх элементүүдэд  mod()-г ашиглан өөрчөлт оруулна map ашиглна 

   Args:
      ажилчдын_жагсаалт: ажилчдын объектуудын жагсаалт

   Returns:
      жагсаалт - Нэр + хэлтэсээс нэрийг залгасан шинэ жагсаалт.
   """
   ### WRITE SOLUTION CODE HERE
   

def generate_usernames(mod_list):
   """ ажилчидийн салбарын  нэрийг өөрчилөх

   [IMPLEMENT ME] 
      1.  replace() ашилан үг хоорондын зайг _ -ээр  соль

    Жагсаалтын ойлголт иймэрхүү харагдаж байна:
      list = [ function() for <item> in <list> ]

      Орлуулах() функцийн формат нь:

      test_str.replace(“a”, “z”) # replaces every “a” in test_str with “z”

   Args:
      mod_list: Нэр + хэлтэсээс нэрийг залгасан шинэ жагсаалт

   Returns:
      жагсаалт - Доод зураасаар тусгаарлагдсан нэр + хэлтэсээс бүрдсэн хэрэглэгчийн нэрсийн жагсаалт.
   """
   ### WRITE SOLUTION CODE HERE
 

def map_id_to_initial(employee_list):
   """ ажилчидын id-ийг өөрчил 
        {хэрэглэгчийн нэрний эхний үсэг:id}
   [IMPLEMENT ME] 
      1. Толь бичгийн ойлголтыг ашиглан ажилтан бүрийн id утга-ыг нэрний эхний үсэг рүү буулгана уу

     Толь бичгийн ойлголт нь иймэрхүү харагдаж байна:
      dict = { key : value for <item> in <list> }

   Args:
      ажилчдын_жагсаалт: ажилчдын объектуудын жагсаалт

   Returns:
     dict - Ажилтны id (утга)-ыг нэрний  эхний үсэгтэй (түлхүүр) буулгах толь бичиг.
   """
   ### WRITE SOLUTION CODE HERE


def main():
   mod_emp_list = to_mod_list(employee_list)
   print("Modified employee list: " + str(mod_emp_list) + "\n")

   print(f"List of usernames: {generate_usernames(mod_emp_list)}\n")

   print(f"Initials and ids: {map_id_to_initial(employee_list)}")

if __name__ == "__main__":
   main()
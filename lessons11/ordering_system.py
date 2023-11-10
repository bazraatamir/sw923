menu = {
    1: {"name": 'espresso',
        "price": 1.99},
    2: {"name": 'coffee', 
        "price": 2.50},
    3: {"name": 'cake', 
        "price": 2.79},
    4: {"name": 'soup', 
        "price": 4.50},
    5: {"name": 'sandwich',
        "price": 4.99}
}

def calculate_subtotal(order):
    """Захиалгын дэд нийлбэрийг тооцоолно

    [хэрэгжүүлэх] 
        1. Захиалгад байгаа бүх зүйлийн үнийг нэмээд нийлбэрийг буцаана

    Args:
        захиалга: барааны нэр, үнийг агуулсан диктүүдийн жагсаалт

    Returns:
        float = Захиалгат байгаа зүйлсийн үнийн нийлбэр
    """
    print('Calculating bill subtotal...')
    ### шийдэлийг бичнэ үү

    raise NotImplementedError()

def calculate_tax(subtotal):
    """ Захиалгын татварыг тооцдог

       [хэрэгжүүлэх] 

       1. Дэд нийлбэрийг 15%-иар үржүүлээд хоёр аравтын бутархай болгон бөөрөнхийлсөн үржвэрийг буцаана.

    Args:
        дэд нийлбэр: татвар авах үнэ

    Returns:
        float - Өгөгдсөн дэд нийлбэрт шаардагдах татвар бөгөөд энэ нь 15%-ийг хоёр аравтын бутархай болгон дугуйрсан байна.
    """
    print('Calculating tax from subtotal...')
       ### шийдэлийг бичнэ үү


    raise NotImplementedError()

def summarize_order(order):
    """ Summarizes the order

        [хэрэгжүүлэх] 

        1. Нийт (дэд нийлбэр + татвар) -ийг тооцоолж, нийт нэрлэсэн хувьсагчид (хоёр аравтын бутархай болгон дугуйрсан) хадгална.
         2. Нэр гэж нэрлэгддэг жагсаалтад зөвхөн бүх зүйлийн нэрийг дарааллаар нь хадгална
         3. Нэр болон нийт дүнг буцаана.

    Args:
        захиалга: барааны нэр, үнийг агуулсан диктүүдийн жагсаалт

    Returns:
       нэрсийн  ба нийт tuple. Буцаах мэдэгдэл нь иймэрхүү харагдах ёстой
        
         буцах нэрс, нийт

    """
    print_order(order)
       ### шийдэлийг бичнэ үү


    raise NotImplementedError()

# захиалгыг хэвлэх
def print_order(order):
    print('You have ordered ' + str(len(order)) + ' items')
    items = []
    items = [item["name"] for item in order]
    print(items)
    return order

# цэсийг дэлгэцэн харуулах
def display_menu():
    print("------- Menu -------")
    for selection in menu:
        print(f"{selection}. {menu[selection]['name'] : <9} | {menu[selection]['price'] : >5}")
    print()

# захиалга авах
def take_order():
    display_menu()
    order = []
    count = 1
    for i in range(3):
        item = input('Select menu item number ' + str(count) + ' (from 1 to 5): ')
        count += 1
        order.append(menu[int(item)])
    return order

'''
программыг  шалгахад тань туслах функцийн дуудлагын жишээг энд оруулав.
Эдгээрийг хүссэнээрээ өөрчилж, тайлбараа болиулж, нэмж болно.
'''
#гол функц
def main():
    order = take_order()
    print_order(order)

    # subtotal = calculate_subtotal(order)
    # print("Subtotal for the order is: " + str(subtotal))

    # tax = calculate_tax(subtotal)
    # print("Tax for the order is: " + str(tax))

    # items, subtotal = summarize_order(order)

if __name__ == "__main__":
    main()

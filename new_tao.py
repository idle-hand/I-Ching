
# new Tao - july 30, 2019 - david howe.

 
readings = ['''The Tao that can be told is not the eternal Tao.
The name that can be named is not the eternal name.
The nameless is the beginning of heaven and Earth.
The named is the mother of the ten thousand things.
Ever desireless, one can see the mystery.
Ever desiring, one sees the manifestations.
These two spring from the same source but differ in name; this appears as darkness.
Darkness within darkness.
The gate to all mystery.''','''Under heaven all can see beauty as beauty only because there is ugliness.
All can know good as good only because there is evil.
Therefore having and not having arise together.
Difficult and easy complement each other.
Long and short contrast each other:
High and low rest upon each other;
Voice and sound harmonize each other;
Front and back follow one another.
Therefore the sage goes about doing nothing, teaching no-talking.
The ten thousand things rise and fall without cease,
Creating, yet not.
Working, yet not taking credit.
Work is done, then forgotten.
Therefore it lasts forever.''','''Not exalting the gifted prevents quarreling.
Not collecting treasures prevents stealing.
Not seeing desirable things prevents confusion of the heart.
The wise therefore rule by emptying hearts and stuffing bellies, by weakening ambitions and
If men lack knowledge and desire, then clever people will not try to interfere.
If nothing is done, then all will be well.''','''The Tao is an empty vessel; it is used, but never filled.
Oh, unfathomable source of ten thousand things!
Blunt the sharpness,
Untangle the knot,
Soften the glare,
Merge with dust.
Oh, hidden deep but ever present!
I do not know from whence it comes.
It is the forefather of the gods.''','''Heaven and Earth are impartial;
They see the ten thousand things as straw dogs.
The wise are impartial;
They see the people as straw dogs.
The space between heaven and Earth is like a bellows.
The shape changes but not the form;
The more it moves, the more it yields.
More words count less.
Hold fast to the center.''']

from tkinter import *
from random import randrange
root = Tk()
pick = randrange(4)
count = 0

def windowwipe():
    toaread.destroy


while count < 1:
    myfrm = Frame(root)
    myfrm.grid(column=0, row=0)
    taoread = Text(myfrm)
    
    taoread.config(bg='lightgreen', font=('times', 14, 'italic'))
    taoread.grid(row=0, column=0)
    taoread.insert(END, readings[pick])


    gif_one = Text(myfrm, height=6, width=9)
    photo=PhotoImage(file='tao.png')
    gif_one.insert(END,'\n')
    gif_one.image_create(END, image=photo)
    gif_one.grid(row=1, column=0)

    button1 = Button(myfrm, text='\nNEXT', width=20, command=Frame.destroy(myfrm))
    button1.grid(row=2, column=0)
    
    button2  = Button(myfrm, text='\nQUIT', width=20,command=quit )
    button2.grid(row=3, column=0)
    
    pick = randrange(4)

    mainloop( )
    


        


    
##from tkinter import *
##from random import randrange

##for widget in frame.winfo_children():
##    widget.destroy()
##


##
##pick = randrange(64)
##count = 0
##
##while count < 64:
##    root = Tk()
##    root.minsize(100,100)
##
##    txtread = Text(root)
##    txtread.config(bg='lightgreen', font=('times', 14, 'italic'))
##    txtread.pack(side=LEFT)
##    txtread.insert(END, readings[pick])
##    
##    
##    gif_one = Text(root, height=5, width=6)
##    photo=PhotoImage(file='./yy.gif')
##    gif_one.insert(END,'\n')
##    gif_one.image_create(END, image=photo)
##
##    gif_one.pack(side=LEFT)
##
##    
##    
##    count = count + 1    
##    pick = randrange(64)
##    
##    mainloop( )
##        
##

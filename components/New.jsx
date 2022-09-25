import React, { Fragment, useState } from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Code from '@tiptap/extension-code'
import TaskList from '@tiptap/extension-task-list'
import { MdTextFields } from 'react-icons/md'
import { BiAlignLeft, BiAlignMiddle, BiAlignJustify, BiAlignRight, BiCodeBlock } from 'react-icons/bi'
import { AiOutlineUnorderedList, AiOutlineOrderedList } from 'react-icons/ai'
import { FiCode } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import { BsListTask } from 'react-icons/bs'
import TaskItem from '@tiptap/extension-task-item'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import { Listbox } from '@headlessui/react'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'


const DropDown = ({ editor }) => {
  const typography = [
      { id: 1, name: "paragraph"},
      { id: 2, name: "header 1" },
      { id: 3, name: "header 2" },
      { id: 4, name: "header 3" }
  ]

  const [ text, setText ] = useState(typography[0])


  function updateText(item) {
    switch(item.name){
      case 'paragraph':
        editor.chain().focus().setParagraph().run()
        break
      case 'header 1':
        editor.chain().focus().toggleHeading({ level: 1 }).run()
        break
      case 'header 2':
        editor.chain().focus().toggleHeading({ level: 2 }).run()
        break
      case 'header 3':
        editor.chain().focus().toggleHeading({ level: 3 }).run()
        break
    }
  }

  return (
    <Listbox value={text} onChange={setText} as="div" className='mr-4 w-full'>
      <div className="relative">
        <Listbox.Button className='bg-input-gray p-2 w-full flex justify-between items-center rounded-2xl'>
        {text.name}
        <span>
          <i> <GoTriangleUp /> </i>
          <i> <GoTriangleDown /> </i>
        </span>
        </Listbox.Button>
        <Listbox.Options className='w-full bg-input-gray overflow-y-scroll absolute z-50 p-0 drop-shadow-2xl'>
        {typography.map(item => (
          <Listbox.Option
            key={item.id}
            value={item}
            as='li'
            className='list-none'
          >
            {({ active, selected }) => (
              <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'}`} onClick={() => updateText(item)}>
                {item.name}
              </span>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      </div>
    </Listbox>
  )
}


const MenuBar = ({ editor }) => {
    return(
        <>
            <div className='bg-bar-gray p-3 flex justify-center items-center'>
              <div className='border-r-2  border-r-border pr-4'>
                <DropDown editor={editor} />
              </div>
              <div className=' border-r-border border-l-border border-r-2'>
                <div className="mx-3 rounded-2xl border-2 border-border">
                  <button 
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    // className={`${editor.isActive({ textAlign: 'left' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
                    className=' p-2 border-r-2 border-r-border'
                  >
                    <i>
                      <BiAlignLeft size={25} />
                    </i>
                  </button>

                  <button 
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    // className={`${editor.isActive({ textAlign: 'center' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
                    className=' p-2 border-r-2 border-r-border'
                  >
                    <i>
                      <BiAlignMiddle size={25} />
                    </i>
                  </button>

                  <button 
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    // className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn'}
                    className=' p-2 border-r-2 border-r-border'
                  >
                    <i>
                      <BiAlignJustify size={25} />
                    </i>
                  </button>

                  <button 
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className=' p-2'
                  >
                    <i>
                      <BiAlignRight size={25} />
                    </i>
                  </button>
                </div>
              </div>

              <div className='border-r-border border-l-border border-r-2'>
                <div className='mx-3 rounded-2xl border-2 border-border'>
                  <button 
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className=' p-2 border-r-2 border-r-border'
                  >
                    <i>
                      <AiOutlineUnorderedList size={25} />
                    </i>
                  </button>

                  <button 
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className=' p-2 border-r-2 border-r-border'
                  >
                    <i>
                      <AiOutlineOrderedList size={25} />
                    </i>
                  </button>

                  <button 
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                    className='p-2'
                  >
                    <i>
                      <BsListTask size={25} />
                    </i>
                  </button>
                </div>
              </div>

              <div className='border-r-0 border-l-border'>
                <div className='mx-3 rounded-2xl border-2 border-border'>
                  <button 
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className='p-2 border-r-2 border-r-border'
                  >
                    <i>
                    <FiCode size={25} />
                    </i>
                  </button> 
                  
                  <button 
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className='p-2 border-r-2 border-r-border'
                  >
                    <i>
                      <BiCodeBlock size={25} />
                    </i>
                  </button>

                  <button 
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className='p-2'
                  >
                    <i>
                    <FaQuoteLeft size={25} />
                    </i>
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}


const New = () => {
   const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Code.configure({
        HTMLAttributes: {
          class: 'code',
        },
      }),
      TaskList,
      CodeBlock.configure({
        class: 'block',
      }),
      TaskItem,
      ListItem,
      Blockquote,
      BulletList,
      OrderedList,
    ],
    content: '<p>Text Here...</p>'
  })
  return (
    <>
        <div className="container mx-auto">
            <div className='mb-5'>
            <input type="text" placeholder='Title...' className='font-bold bg-input-gray p-4' style={{outline: 'none', width: '100%'}}/>
            </div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor}/>
        </div>
    </>
  )
}

export default New
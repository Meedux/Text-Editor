import React, { Fragment, useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Code from '@tiptap/extension-code'
import TaskList from '@tiptap/extension-task-list'
import { MdTextFields } from 'react-icons/md'
import { Listbox } from '@headlessui/react'
import { BiAlignLeft, BiAlignMiddle, BiAlignJustify, BiAlignRight, BiLeftIndent, BiRightIndent, BiCodeBlock, BiBold } from 'react-icons/bi'
import { AiOutlineUnorderedList, AiOutlineOrderedList } from 'react-icons/ai'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import { FiCode } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import { BsListTask } from 'react-icons/bs'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import TaskItem from '@tiptap/extension-task-item'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'





const TypographyDropdown = ( { editor, setActive, isActive } ) => {
  return (
    <Menu>
      <Menu.Items as='div' className='relative '>
        <Menu.Item as='span'>
          {({ active }) => (
            <button 
              className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('heading', { level: 1 }) && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              style={{transition: '300ms'}}
            >
              H1
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button 
              className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('heading', { level: 2 }) && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              style={{transition: '300ms'}}
            >
              H2
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button 
              className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('heading', { level: 3 }) && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              style={{transition: '300ms'}}
            >
              H3
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button 
              className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('bold') && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
              onClick={() => editor.chain().focus().toggleBold().run()}
              style={{transition: '300ms'}}
            >
              Bold
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button 
              className={`${active ? 'bg-selection-gray p-2 mr-3 rounded-md text-white' : 'mr-3'} ${editor.isActive('italic') && 'bg-selection-gray p-2 mr-3 rounded-md text-white'}`} 
              onClick={() => editor.chain().focus().toggleItalic().run()}
              style={{transition: '300ms'}}
            >
              Italic
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
      <Menu.Button onClick={() => {setActive(!isActive)}}>
        <MdTextFields size={25} />
      </Menu.Button>
    </Menu>
  )
}




const MenuBar = ({editor}) => {
    // const fonts = [
    //   { id: 1, name: "Font One"},
    //   { id: 2, name: "Font Two"},
    //   { id: 3, name: "Font Three"},
    //   { id: 4, name: "Font Four"},
    //   { id: 5, name: "Font Five"},
    // ]

    // const sizes = [
    //   {id: 1, value: 10},
    //   {id: 2, value: 11},
    //   {id: 3, value: 12},
    //   {id: 4, value: 13},
    //   {id: 5, value: 14},
    //   {id: 6, value: 15},
    //   {id: 7, value: 16},
    //   {id: 8, value: 20},
    //   {id: 9, value: 24},
    //   {id: 10, value: 32},
    //   {id: 11, value: 36},
    //   {id: 12, value: 40},
    //   {id: 13, value: 48},
    //   {id: 14, value: 64},
    //   {id: 15, value: 96},
    //   {id: 16, value: 128}
    // ]
    // const [ selectedFont, setFont ] = useState(fonts[0])
    // const [ selectedSize, setSize ] = useState(sizes[0])

    const [ isActive, setActive ] = useState(false)

    return (
      <div className='h-full'>
        <div className='bg-bar-gray p-3'>
          <div className='flex justify-center items-center'>
            <button className={`${!isActive ? 'btn-active' : 'btn'}`}>
              <TypographyDropdown editor={editor} setActive={setActive} isActive={isActive}/>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              // className={editor.isActive({ textAlign: 'left' }) ? 'btn-active' : 'btn'}
              className='btn'
            >
              <i>
                <BiAlignLeft size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              // className={editor.isActive({ textAlign: 'center' }) ? 'btn-active' : 'btn'}
              className='btn'
            >
              <i>
                <BiAlignMiddle size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              // className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn'}
              className='btn'
            >
              <i>
                <BiAlignJustify size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className='btn'
            >
              <i>
                <BiAlignRight size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className='btn'
            >
              <i>
                <AiOutlineUnorderedList size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className='btn'
            >
              <i>
                <AiOutlineOrderedList size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className='btn'
            >
              <i>
                <BsListTask size={25} />
              </i>
            </button>

            {/* NON-Existent LMAOOOOO */}

            {/* <button 
              onClick={}
              className='btn'
            >
              <BiLeftIndent size={25} />
            </button>

            <button className='btn'>
              <BiRightIndent size={25} />
            </button> */}

            <button 
              onClick={() => editor.chain().focus().toggleCode().run()}
              className='btn'
            >
              <i>
              <FiCode size={25} />
              </i>
            </button> 
            
            <button 
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className='btn'
            >
              <i>
                <BiCodeBlock size={25} />
              </i>
            </button>

            <button 
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className='btn'
            >
              <i>
              <FaQuoteLeft size={25} />
              </i>
            </button>



            {/* Dropdown Menu for Fonts and Font Sizes that i have no idea how to tackle LMAOOO */}
            {/* <Listbox value={selectedFont} onChange={setFont} as="div" className='w-1/6 mr-4'>
              <div className="relative">
                <Listbox.Button className='bg-input-gray p-2 w-full flex justify-between items-center'>
                  {selectedFont.name}
                  <span>
                    <i> <GoTriangleUp /> </i>
                    <i> <GoTriangleDown /> </i>
                  </span>
                </Listbox.Button>
                <Listbox.Options className='w-full bg-input-gray overflow-y-scroll '>
                {fonts.map(item => (
                  <Listbox.Option
                    key={item.id}
                    value={item}
                  >
                    {({ active, selected }) => (
                      <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'}`}>
                        {item.name}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
              </div>
            </Listbox>

            <Listbox value={selectedSize} onChange={setSize} as="div" className='w-1/12 mr-4'>
              <div className="relative">
                <Listbox.Button className='bg-input-gray p-2 w-full flex justify-between items-center'>
                  {selectedSize.value}
                  <span>
                    <i> <GoTriangleUp /> </i>
                    <i> <GoTriangleDown /> </i>
                  </span>
                </Listbox.Button>
                <Listbox.Options className='w-full bg-input-gray overflow-y-scroll '>
                {sizes.map(item => (
                  <Listbox.Option
                    key={item.id}
                    value={item}
                  >
                    {({ active, selected }) => (
                      <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'}`}>
                        {item.value}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
              </div>
            </Listbox> */}
          </div>
        </div>
      </div>
    )
}
 
const Main = () => {
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
      <div className='container mx-auto'>
        <div className='mb-5'>
          <input type="text" placeholder='Title...' className='font-bold bg-input-gray p-4' style={{outline: 'none', width: '100%'}}/>
        </div>
        <MenuBar editor={editor} />
        <EditorContent editor={editor}/>
      </div>
    </>
  )
}

export default Main